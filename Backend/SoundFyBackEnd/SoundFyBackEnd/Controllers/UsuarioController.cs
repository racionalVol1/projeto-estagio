using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SoundFyBackEnd.Models;
using SoundFyBackEnd.Repositorios.Interfaces;

namespace SoundFyBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;

        public UsuarioController(IUsuarioRepositorio usuarioRepositorio)
        {
            _usuarioRepositorio = usuarioRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<List<UsuarioModels>>> BuscarUsuarios()
        {
            List<UsuarioModels> usuario = await _usuarioRepositorio.BuscarUsuarios();
            return Ok();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UsuarioModels>> BuscarPorId(int id)
        {
            UsuarioModels usuario = await _usuarioRepositorio.BuscarPorId(id);
            return Ok(usuario);
        }

        [HttpPost]
        public async Task<ActionResult<UsuarioModels>> Cadastrar([FromBody] UsuarioModels usuarioModels)
        {
            UsuarioModels usuario = await _usuarioRepositorio.AdcionarUsuario(usuarioModels);

            return Ok(usuario);
        }
    }
}
