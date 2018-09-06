using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        // GET api/home
        [HttpGet]
        public ActionResult<List<PostModel>> Get()
        {
            return new List<PostModel>(){
                new PostModel() {Titulo="TESTE 1"},
                new PostModel() {Titulo="TESTE 2"},
                new PostModel() {Titulo="TESTE 3"}
            };
        }

        // GET api/home/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            var amanha = DateTime.Now.AddDays(1);

            return amanha.ToShortDateString();
        }

     
    }
}
