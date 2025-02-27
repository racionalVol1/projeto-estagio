using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SoundFyBackEnd.Models;

namespace SoundFyBackEnd.Data.Map
{
    public class UsuarioMap : IEntityTypeConfiguration<UsuarioModels>
    {
        public void Configure(EntityTypeBuilder<UsuarioModels> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Email).IsRequired().HasMaxLength(150);

        }
    }
}
