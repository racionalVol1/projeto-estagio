using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SoundFY.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase

    {
        [HttpGet("ObterDatahoraAtual")]
        public IActionResult ObterDataHora()
        {
            var obj = new 
            {
                Data = DateTime.Now.ToLongDateString(),
                Hora = DateTime.Now.ToShortTimeString()
               
            };

            return Ok(obj);

        }

        [HttpGet("Apresentar/{nome}")]
        public IActionResult Apresentar(string nome)
        {
           var mensagem = $"Olá, {nome}! Seja bem-vindo ao SoundFY!";
           return Ok(new { mensagem });
        }
    }
}