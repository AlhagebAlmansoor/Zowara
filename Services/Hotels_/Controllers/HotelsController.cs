using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hotels.Domain;
using Hotels.Models;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;

namespace Hotels.Controllers
{

    public class Room
    {
        public Guid Id { get; set; }
        public int FloorNo { get; set; }
        public Decimal Price { get; set; }
        public int ReservationId { get; set; }

    }

    [Route("api/Test")]
    public class TestController : Controller
    {
        [HttpGet]
        public String GetValue()
        {
            return "Hii World!!";
        }
    }

    //[Produces("application/json")]
    [Route("api/[Controller]/[Action]")]
    public class HotelsController : Controller
    {
        private readonly ServiceContext _context;
        static HttpClient client = new HttpClient();

        public HotelsController(ServiceContext context)
        {
            _context = context;
            if (client.BaseAddress == null)
            { 
                client.BaseAddress = new Uri("http://localhost/HtlService/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            }
        }

        [HttpGet]
        public String SayHello()
        {
            return "Hii";
        }

        [HttpGet]
        public async Task<IEnumerable<Room>> GetValue()
        {
            try
            {
                IEnumerable<Room> result;
                HttpResponseMessage response = await client.GetAsync("api/Rooms/GetRooms");
                if (response.IsSuccessStatusCode)
                {
                    result =  JsonConvert.DeserializeObject<IEnumerable<Room>> (response.Content.ReadAsStringAsync().Result);
                }
                else
                { 
                    return null;
                }
                return result;
             }
            catch (Exception ex)
            {
                return null;
            }
        }

        // GET: api/Hotels
        [HttpGet]
        public IEnumerable<Hotel> GetHotels()
        {
            return _context.Hotels;
        }

        //[HttpGet]
        //static async Task<List<Room>> FindRooms()
        //{
        //    HttpResponseMessage response = await client.GetAsync($"api/rooms");
        //    if (response.IsSuccessStatusCode)
        //    {
        //        var Result = await response.Content.ReadAsByteArrayAsync<List<Room>>();
        //    }
        //    //return result;
        //    return null;
        //}

        //// GET: api/Hotels/5
        //[HttpGet("{id}")]
        //public async Task<IActionResult> GetHotel([FromRoute] long id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var hotel = await _context.Hotels.SingleOrDefaultAsync(m => m.Id == id);

        //    if (hotel == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(hotel);
        //}

        //// PUT: api/Hotels/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutHotel([FromRoute] long id, [FromBody] Hotel hotel)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != hotel.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(hotel).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!HotelExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/Hotels
        //[HttpPost]
        //public async Task<IActionResult> PostHotel([FromBody] Hotel hotel)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    _context.Hotels.Add(hotel);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetHotel", new { id = hotel.Id }, hotel);
        //}

        //// DELETE: api/Hotels/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteHotel([FromRoute] long id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var hotel = await _context.Hotels.SingleOrDefaultAsync(m => m.Id == id);
        //    if (hotel == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Hotels.Remove(hotel);
        //    await _context.SaveChangesAsync();

        //    return Ok(hotel);
        //}

        //private bool HotelExists(long id)
        //{
        //    return _context.Hotels.Any(e => e.Id == id);
        //}
    }
}