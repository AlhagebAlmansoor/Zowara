using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HtlService;
using HtlService.Domain;

namespace HtlService.Controllers
{

    [Route("api/Test")]
    public class TestController : Controller
    {
        [HttpGet]
        public String SayHello()
        {
            return "Hello World !!";
        }
    }
      // [Produces("applicsation/json")]
    [Route("api/[Controller]/[Action]")]
    public class RoomsController : Controller
    {
        private readonly AppContext _context;


        public RoomsController()
        {
            _context = new AppContext();
        }

        [HttpGet]
        public String GetValue()
        {
            return "Hello ,, That is really Smart,, This is the Other Service speaking to you man  !!";
        }
      //  GET: api/Rooms
       [HttpGet]
        public IEnumerable<Room> GetRooms()
        {
            return _context.Rooms;
        }

        ////   GET: api/Rooms/5
        //   [HttpGet("{id}")]
        //   public async Task<IActionResult> GetRoom([FromRoute] Guid id)
        //   {
        //       if (!ModelState.IsValid)
        //       {
        //           return BadRequest(ModelState);
        //       }

        //       var room = await _context.Rooms.SingleOrDefaultAsync(m => m.Id == id);

        //       if (room == null)
        //       {
        //           return NotFound();
        //       }

        //       return Ok(room);
        //   }

        //   // PUT: api/Rooms/5
        //   [HttpPut("{id}")]
        //   public async Task<IActionResult> PutRoom([FromRoute] Guid id, [FromBody] Room room)
        //   {
        //       if (!ModelState.IsValid)
        //       {
        //           return BadRequest(ModelState);
        //       }

        //       if (id != room.Id)
        //       {
        //           return BadRequest();
        //       }

        //       _context.Entry(room).State = EntityState.Modified;

        //       try
        //       {
        //           await _context.SaveChangesAsync();
        //       }
        //       catch (DbUpdateConcurrencyException)
        //       {
        //           if (!RoomExists(id))
        //           {
        //               return NotFound();
        //           }
        //           else
        //           {
        //               throw;
        //           }
        //       }

        //       return NoContent();
        //   }

        //   // POST: api/Rooms
        //   [HttpPost]
        //   public async Task<IActionResult> PostRoom([FromBody] Room room)
        //   {
        //       if (!ModelState.IsValid)
        //       {
        //           return BadRequest(ModelState);
        //       }

        //       _context.Rooms.Add(room);
        //       await _context.SaveChangesAsync();

        //       return CreatedAtAction("GetRoom", new { id = room.Id }, room);
        //   }

        //   // DELETE: api/Rooms/5
        //   [HttpDelete("{id}")]
        //   public async Task<IActionResult> DeleteRoom([FromRoute] Guid id)
        //   {
        //       if (!ModelState.IsValid)
        //       {
        //           return BadRequest(ModelState);
        //       }

        //       var room = await _context.Rooms.SingleOrDefaultAsync(m => m.Id == id);
        //       if (room == null)
        //       {
        //           return NotFound();
        //       }

        //       _context.Rooms.Remove(room);
        //       await _context.SaveChangesAsync();

        //       return Ok(room);
        //   }

        //   private bool RoomExists(Guid id)
        //   {
        //       return _context.Rooms.Any(e => e.Id == id);
        //   }
    }
}