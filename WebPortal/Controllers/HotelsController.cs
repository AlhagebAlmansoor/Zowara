using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebPortal.Domain;
using WebPortal.Models;

namespace WebPortal.Controllers
{
    [Produces("application/json")]
    [Route("api/Hotels")]
    public class HotelsController : Controller
    {
        private readonly ServiceContext _context;

        public HotelsController()
        {
            _context = new ServiceContext();
        }

        // GET: api/Hotels
        [HttpGet]
        public IEnumerable<Hotel> GetHotels()
        {
            return _context.Hotels;
        }

        // GET: api/Hotels/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetHotel([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var hotel = await _context.Hotels.SingleOrDefaultAsync(m => m.Id == id);

            if (hotel == null)
            {
                return NotFound();
            }

            return Ok(hotel);
        }

        // PUT: api/Hotels/5
        [HttpPut("{id}")]
        public async Task<IActionResult> EditHotel([FromRoute] long id, [FromBody] Hotel hotel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != hotel.Id)
            {
                return BadRequest();
            }

            _context.Entry(hotel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HotelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Hotels
        [HttpPost]
        public async Task<IActionResult> AddHotel([FromBody] Hotel hotel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Hotels.Add(hotel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHotel", new { id = hotel.Id }, hotel);
        }

        // DELETE: api/Hotels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotel([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var hotel = await _context.Hotels.SingleOrDefaultAsync(m => m.Id == id);
            if (hotel == null)
            {
                return NotFound();
            }

            _context.Hotels.Remove(hotel);
            await _context.SaveChangesAsync();

            return Ok(hotel);
        }

        private bool HotelExists(long id)
        {
            return _context.Hotels.Any(e => e.Id == id);
        }
    }
}