using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SoundFyBackEnd.Models;

namespace SoundFyBackEnd.Data.Map
{
    public class MusicaMap : IEntityTypeConfiguration<MusicaModels>
    {
        public void Configure(EntityTypeBuilder<MusicaModels> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Album).IsRequired().HasMaxLength(150);
            builder.Property(x => x.Artista).IsRequired().HasMaxLength(150);

        }
    }
}
