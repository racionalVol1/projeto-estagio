using Microsoft.EntityFrameworkCore;
using SoundFyBackEnd.Data.Map;
using SoundFyBackEnd.Models;

namespace SoundFyBackEnd.Data
{
    public class SoundFyDbContext : DbContext
    {
        public SoundFyDbContext(DbContextOptions<SoundFyDbContext>options) : base(options) 
        {
        }

        public DbSet<UsuarioModels> Usuarios { get; set; }
        public DbSet<ArtistaModels> Artistas { get; set; }
        public DbSet<AlbumModels> Albuns { get; set; }
        public DbSet<MusicaModels> Musicas { get; set; }
        public DbSet<PlaylistModels> Playlists { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsuarioMap());
            modelBuilder.ApplyConfiguration(new ArtistaMap());
            modelBuilder.ApplyConfiguration(new AlbumMap());
            modelBuilder.ApplyConfiguration(new MusicaMap());
            modelBuilder.ApplyConfiguration(new PlaylistMap());
            base.OnModelCreating(modelBuilder);
        }

    }
}
