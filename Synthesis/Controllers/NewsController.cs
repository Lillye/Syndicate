using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.ServiceModel.Syndication;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Synthesis.Models;

namespace Synthesis.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var urls = new string[] {
                @"https://www.geekweek.pl/rss/wszystkie.xml",
                @"https://physicsworld.com/feed",
                @"http://kotaku.com/vip.xml",
                @"https://www.gamespot.com/feeds/mashup/"
            };
            WebClient webClient = new WebClient();
            // webClient.Headers.Add("user-agent", "Chrome/15.0.874.121");
            // webClient.Headers.Add("User-Agent: Other");
            // webClient.Headers.Add("user-agent", "Mozilla/5.0 (Windows; Windows NT 5.1; rv:1.9.2.4) Gecko/20100611 Firefox/57.0.4");
            webClient.Headers.Add("user-agent", " Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136");
            var newsList = new List<string>();
            foreach (var url in urls)
            {
                XmlReader reader = XmlReader.Create(webClient.OpenRead(url));
                SyndicationFeed feed = SyndicationFeed.Load(reader);
                reader.Close();

                foreach (var item in feed.Items)
                {
                    newsList.Add(item.Title.Text);
                }
            }
            return newsList;
        }
    }
}

