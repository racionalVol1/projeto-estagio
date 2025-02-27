using Microsoft.EntityFrameworkCore;
using SoundFyBackEnd.Data;
using SoundFyBackEnd.Models;
using SoundFyBackEnd.Repositorios.Interfaces;

namespace SoundFyBackEnd.Repositorios
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly SoundFyDbContext _dbContext;
        public UsuarioRepositorio(SoundFyDbContext soundFyDbContext)
        {
            _dbContext = soundFyDbContext;
        }

        public async Task<UsuarioModels> BuscarPorId(int id)
        {
            return await _dbContext.Usuarios.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<UsuarioModels>> BuscarUsuarios()
        {
            return await _dbContext.Usuarios.ToListAsync();
        }
        public async Task<UsuarioModels> AdcionarUsuario(UsuarioModels usuario)
        {
            await _dbContext.Usuarios.AddAsync(usuario);
            await _dbContext.SaveChangesAsync();

            return usuario;
        }

        public async Task<UsuarioModels> AtualizarUsuario(UsuarioModels usuario, int id)
        {
            UsuarioModels usuarioPorId = await BuscarPorId(id);
            
            if(usuarioPorId == null)
            {
                throw new Exception($"Usuario para o ID:{id} Não foi encontrado");
            }

            usuarioPorId.Nome = usuario.Nome;
            usuarioPorId.Email = usuario.Email;

            _dbContext.Usuarios.Update(usuarioPorId);
            await _dbContext.SaveChangesAsync();

            return usuarioPorId;
        }

        public async Task<bool> Apagar(int id)
        {
            UsuarioModels usuarioPorId = await BuscarPorId(id);

            if (usuarioPorId == null)
            {
                throw new Exception($"Usuario para o ID:{id} Não foi encontrado");
            }

            _dbContext.Usuarios.Remove(usuarioPorId);
            await _dbContext.SaveChangesAsync();

            return true;  

        }            
    }
}
