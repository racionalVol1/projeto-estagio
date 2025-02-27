using SoundFyBackEnd.Models;

namespace SoundFyBackEnd.Repositorios.Interfaces
{
    public interface IUsuarioRepositorio
    {
        Task<List<UsuarioModels>> BuscarUsuarios();
        Task<UsuarioModels> BuscarPorId(int id);
        Task<UsuarioModels> AdcionarUsuario(UsuarioModels usuario);
        Task<UsuarioModels> AtualizarUsuario(UsuarioModels usuario, int id);
        Task<bool> Apagar(int id);


    }
}
