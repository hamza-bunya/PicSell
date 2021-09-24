using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PicSell.Services;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace PicSell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TilesController : ControllerBase
    {
        private readonly ITileService _tileService;

        public TilesController(ITileService tileService)
        {
            _tileService = tileService;
        }

        [HttpGet("GetTile")]
        public async Task<FileContentResult> GetTile(int level, int x, int y, int tileSize, int tileOverlap)
        {
            Bitmap img = _tileService.GetTile(level, x, y, tileSize, tileOverlap);
            byte[] data;
            using (var memoryStream = new MemoryStream())
            {
                img.Save(memoryStream, ImageFormat.Bmp);
                data = memoryStream.ToArray();
            }
            return File(data, "image/jpeg");
            
        }
    }
}
