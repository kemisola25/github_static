using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace GbolahanSuperStore.Models
{
    public partial class GbolahanSuperStoreContext : DbContext
    {
        public GbolahanSuperStoreContext()
        {
        }

        public GbolahanSuperStoreContext(DbContextOptions<GbolahanSuperStoreContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblCustomerPaymentRecordInformation> TblCustomerPaymentRecordInformation { get; set; }
        public object TblStoreInformation { get; internal set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=localhost;Database=GbolahanSuperStore; user id=sa; password=sqluser10$;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TblCustomerPaymentRecordInformation>(entity =>
            {
                entity.ToTable("tbl_CustomerPaymentRecordInformation");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CustomerName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.Ref)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TransactionAmount).HasColumnType("decimal(10, 0)");

                entity.Property(e => e.TransactionNumber).HasColumnType("decimal(10, 0)");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
