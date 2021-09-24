using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PicSell.Models;
using PicSell.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PicSell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PicSellController : ControllerBase
    {
        private readonly ICosmoService _cosmo;

        public PicSellController(ICosmoService cosmo)
        {
            _cosmo = cosmo;
        }


        [HttpPost("SavePicSell")]
        public async Task<ActionResult> SavePicSell(PSell psell)
        {
            await _cosmo.AddPicSell(psell);
            return Ok();
        }
    }
}
