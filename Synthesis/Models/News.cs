using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Synthesis.Models
{
    public class News
    {
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Date { get; set; }
        public IEnumerable<Tuple<string,string>> Links { get; set; }
    }
}
