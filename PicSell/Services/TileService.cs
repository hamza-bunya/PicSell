using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Linq;
using System.Threading.Tasks;

namespace PicSell.Services
{

    public interface ITileService
    {
        public Bitmap GetTile(int level, int x, int y, int tileSize, int tileOverlap);
    }

    public class TileService : ITileService
    {
        public Bitmap GetTile(int level, int x, int y, int tileSize, int tileOverlap)
        {
            //string testUrl = "blankPicSell.bmp";
            //Bitmap temp = (Bitmap)Bitmap.FromFile(testUrl);
            //return temp;
            string imageUrl = "test1.jpg";
            Bitmap source = (Bitmap)Bitmap.FromFile(imageUrl);
            if (source == null)
                return null;
            Bitmap tile = CreateTileImage(source, level, x, y, tileSize, tileOverlap);
            return tile;
        }


        private static Bitmap CreateTileImage(Bitmap source, int level, int x, int y, int tileSize, int tileOverlap)
        {
            int width, height;
            if (source.Width > source.Height)
            {
                width = (int)Math.Pow(2, level);
                height = width * source.Height / source.Width;
            }
            else
            {
                height = (int)Math.Pow(2, level);
                width = height * source.Width / source.Height;
            }
            tileSize = Math.Min(tileSize, (int)Math.Pow(2, level));
            int tileLeft = x * tileSize - tileOverlap;
            int tileWidth = tileSize + 2 * tileOverlap;
            int tileTop = y * tileSize - tileOverlap;
            int tileHeight = tileSize + 2 * tileOverlap;
            if (tileLeft < 0)
            {
                tileLeft += tileOverlap;
                tileWidth -= tileOverlap;
            }
            if (tileTop < 0)
            {
                tileTop += tileOverlap;
                tileHeight -= tileOverlap;
            }
            float ratio = (float)source.Width / width;
            float srcLeft = tileLeft * ratio;
            float srcWidth = tileWidth * ratio;
            float srcTop = tileTop * ratio;
            float srcHeight = tileHeight * ratio;
            if (srcLeft + srcWidth > source.Width)
            {
                srcWidth = source.Width - srcLeft;
                tileWidth = (int)Math.Round(srcWidth / ratio);
            }
            if (srcTop + srcHeight > source.Height)
            {
                srcHeight = source.Height - srcTop;
                tileHeight = (int)Math.Round(srcHeight / ratio);
            }
            Bitmap bmp = new Bitmap(tileWidth, tileHeight);
            Graphics g = Graphics.FromImage(bmp);
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.DrawImage(source,
                new RectangleF(0, 0, tileWidth, tileHeight),
                new RectangleF(srcLeft, srcTop, srcWidth, srcHeight),
                GraphicsUnit.Pixel);
            g.Dispose();
            //GC.Collect();
            return bmp;
        }
    }
}
