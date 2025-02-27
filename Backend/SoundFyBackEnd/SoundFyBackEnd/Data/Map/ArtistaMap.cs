using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SoundFyBackEnd.Models;

namespace SoundFyBackEnd.Data.Map
{
    public class ArtistaMap : IEntityTypeConfiguration<ArtistaModels>
    {
        public void Configure(EntityTypeBuilder<ArtistaModels> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Musicas).IsRequired().HasMaxLength(150);
            builder.Property(x => x.EstiloMusical).IsRequired().HasMaxLength(150);
            builder.Property(x => x.Album).IsRequired().HasMaxLength(150);

        }
    }
}
