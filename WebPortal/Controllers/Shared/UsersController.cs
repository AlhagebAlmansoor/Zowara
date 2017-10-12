using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using WebPortal.Security;
using Microsoft.AspNetCore.Authorization;

namespace WebPortal.Controllers.Shared
{
    public class UsersController : Controller
    {
        private UserManager<AppUser> AppUserManager;
        private SignInManager<AppUser> AppSignInManager;

        public UsersController(UserManager<AppUser> _userManager, SignInManager<AppUser> _signinManager)
        {
            AppUserManager = _userManager;
            AppSignInManager = _signinManager;
        }
            
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model, string returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            if (ModelState.IsValid)
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await AppSignInManager.PasswordSignInAsync(model.LoginId,
                    model.Password, model.RememberMe, lockoutOnFailure: false);
                if (result.Succeeded)
                {
                   // _logger.LogInformation(1, "User logged in.");
                    return RedirectToAction("/provider/index");
                }
                //if (result.RequiresTwoFactor)
                //{
                //    return RedirectToAction(nameof(SendCode), new { ReturnUrl = returnUrl, RememberMe = model.RememberMe });
                //}
                //if (result.IsLockedOut)
                //{
                //    _logger.LogWarning(2, "User account locked out.");
                //    return View("Lockout");
                //}
                else
                {
                    ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                    return View(model);
                }
            }
            return View(model);
        }

        [HttpGet]
        public IActionResult SignUp()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Signup(RegisterViewModel model)
        {
            
            if (ModelState.IsValid)
            {
                var user = new AppUser { Email = model.LoginId, UserName = model.LoginId, FirstName=model.FirstName,LastName=model.LastName };
                var result = await AppUserManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    return RedirectToAction("~/provider/index", "Home");
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError("", error.Description);
                    }
                }
            }

            return View(model);
        }
    }

    public class RegisterViewModel
    {
        [Required]
        public String LoginId { get; set; }
        [Required]
        public String FirstName { get; set; }
        [Required]
        public String LastName { get; set; }
        [Required, DataType(DataType.Password)]
        public String Password { get; set; }
        [DataType(DataType.Password), Compare(nameof(Password))]
        public String ConfirmPassword { get; set; }
    }

    public class LoginViewModel
    {   
        [Required]
        public String LoginId { get; set; }
        [Required]
        public String Password { get; set; }

        [Required]
        public Boolean RememberMe { get; set; }

    }
}