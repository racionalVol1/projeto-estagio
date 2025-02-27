namespace SoundFyBackEnd.Models
{
    public class UsuarioModels
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public string? Email { get; set; }
        public string? Celular { get; set; }
        public string? DataAniversario { get; set; }
        public string? Senha { get; set; }
        public Boolean? Artista { get; set; }
    }  
}
