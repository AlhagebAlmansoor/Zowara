using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Hotels.Domain;

namespace Hotels.Migrations
{
    [DbContext(typeof(ServiceContext))]
    [Migration("20170928083601_FirstMigrat")]
    partial class FirstMigrat
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.3")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Hotels.Models.Hotel", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address");

                    b.Property<string>("CreatedBy")
                        .HasMaxLength(256);

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("HotelId");

                    b.Property<string>("Name");

                    b.Property<string>("UpdatedBy")
                        .HasMaxLength(256);

                    b.Property<DateTime>("UpdatedDate");

                    b.HasKey("Id");

                    b.ToTable("Hotels");
                });
        }
    }
}
