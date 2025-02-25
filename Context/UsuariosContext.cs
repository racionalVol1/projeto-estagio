using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SoundFY.Entities;

namespace SoundFY.Context
{
    public class UsuariosContext : DbContext
    {
        public UsuariosContext(DbContextOptions<UsuariosContext> options) : base(options)
        {

        }

        public DbSet<Usuarios>? Usuarios { get; set; }
    }
}