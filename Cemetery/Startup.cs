﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using CemeteryApp.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace CemeteryApp
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            string connectionString = "";
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
                connectionString = "Host = localhost; Port = 5432; Database = cemetery; Username = postgres; Password = postgres;";
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
                connectionString = "Host = localhost; Port = 5432; Database = cemetery; Username = pradlol; Password = postgres;";

            services.AddDbContext<CemeteryContext>(options => options.UseNpgsql(connectionString));

            services.AddMvc();
			
			// In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                /* app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                }); */
            }
			else 
			{
				//app.UseExceptionPage("/Error");
				app.UseHsts();
			}
				
			app.UseHttpsRedirection();
            app.UseStaticFiles();
			app.UseSpaStaticFiles();
            app.UseMvc();
			
			app.UseSpa(spa =>
			{
				spa.Options.SourcePath = "ClientApp";
				
				if (env.IsDevelopment())
				{
					spa.UseAngularCliServer(npmScript: "start");
				}
			});

            // обработка маршрутов, которые не сопоставлены с ресурсам ранее
            app.Run(async (context) =>
            {
                context.Response.ContentType = "text/html";
                await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
            });

        }
    }
}
