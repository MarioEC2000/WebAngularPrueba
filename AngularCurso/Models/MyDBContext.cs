using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AngularCurso.Models
{
    public class MyDBContext : DbContext
    {
        //inyeccion de dependecias se usa en MVC 
        public MyDBContext(DbContextOptions<MyDBContext> options) : base(options)
        {

        }

        public DbSet<Message> TablaMessages { get; set; }

        //Tabla base de datos
        public class Message
        {

            public int Id { get; set; }
            public int Name { get; set; }
            public int Text { get; set; }


        }



    }
}
