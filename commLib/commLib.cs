﻿using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Threading;


namespace commLib
{

    // Context 


    public interface IContext
    {
        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        EntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;

        int SaveChanges();
      //  Task<int> SaveChangesAsync();
    }

    /// <summary>
    /// Real context but we used IContext for interacting with other layer
    /// provide isolation with the real context with interface IContext
    /// </summary>
    /// 
    public class ZowarahContext : DbContext, IContext
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }


        /// <summary>
        /// Author Faris
        /// Automatically override to save the date, can be updated later
        /// </summary>
        /// <returns></returns>
        public override int SaveChanges()
        {
            try
            {
                var modifiedEntries = ChangeTracker.Entries();
                //    .Where(x => x.Entity is IAuditableEntity
                // && (x.State == System.Data.Entity.EntityState.Added || x.State == System.Data.Entity.EntityState.Modified));

                foreach (var entry in modifiedEntries)
                {
                    IAuditableEntity entity = entry.Entity as IAuditableEntity;
                    if (entity != null)
                    {
                        string identityName = "Test";
                        DateTime now = DateTime.Now;

                        if (entry.State == EntityState.Added)
                        {
                            entity.CreatedBy = identityName;
                            entity.CreatedDate = now;
                        }
                        else
                        {
                            base.Entry(entity).Property(x => x.CreatedBy).IsModified = false;
                            base.Entry(entity).Property(x => x.CreatedDate).IsModified = false;
                        }

                        entity.UpdatedBy = identityName;
                        entity.UpdatedDate = now;
                    }
                }
                return base.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }

        }

        /// <summary>
        /// Author Faris
        /// If using async, we can use this
        /// </summary>
        /// <returns></returns>
        
    //    public override Task<int> SaveChangesAsync()
    //    {
    //        try
    //        {
    //            var modifiedEntries = ChangeTracker.Entries();
    //            // .Where(x => x.Entity is IAuditableEntity
    //            //   && (x.State == System.Data.Entity.EntityState.Added || x.State == System.Data.Entity.EntityState.Modified));

    //            foreach (var entry in modifiedEntries)
    //            {
    //                IAuditableEntity entity = entry.Entity as IAuditableEntity;
    //                if (entity != null)
    //                {
    //                    //Thread.CurrentPrincipal.Identity.Name;
    //                    string identityName = "Test";
    //                    DateTime now = DateTime.Now;

    //                    if (entry.State == EntityState.Added)
    //                    {
    //                        entity.CreatedBy = identityName;
    //                        entity.CreatedDate = now;
    //                    }
    //                    else
    //                    {
    //                        base.Entry(entity).Property(x => x.CreatedBy).IsModified = false;
    //                        base.Entry(entity).Property(x => x.CreatedDate).IsModified = false;
    //                    }

    //                    entity.UpdatedBy = identityName;
    //                    entity.UpdatedDate = now;
    //                }
    //            }
    //            base.SaveChangesAsync();
    //        }
    //        catch (Exception)
    //        {

    //            throw;
    //        }
    //        return Task.FromResult(0);
    //    }

    }

    }

        // Entities
        public abstract class AuditableEntity<T> : Entity<T>, IAuditableEntity
    {
        [ScaffoldColumn(false)]
        public DateTime CreatedDate { get; set; }

        [MaxLength(256)]
        [ScaffoldColumn(false)]
        public string CreatedBy { get; set; }

        [ScaffoldColumn(false)]
        public DateTime UpdatedDate { get; set; }

        [MaxLength(256)]
        [ScaffoldColumn(false)]
        public string UpdatedBy { get; set; }
    }

    public abstract class Entity<T> : IEntity<T>
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public virtual T Id { get; set; }

        object IEntity.Id
        {
            get { return this.Id; }
            set { this.Id = (T)Convert.ChangeType(value, typeof(T)); }
        }
    }

    public interface IAuditableEntity
    {
        DateTime CreatedDate { get; set; }

        string CreatedBy { get; set; }

        DateTime UpdatedDate { get; set; }

        string UpdatedBy { get; set; }
    }

    public interface IEntity
    {
        object Id { get; set; }
    }
    public interface IEntity<T> : IEntity
    {
        new T Id { get; set; }
    }



