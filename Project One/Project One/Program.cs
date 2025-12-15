var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Serve index.html and other static files from wwwroot
app.UseDefaultFiles();   // looks for index.html, default.html, etc.
app.UseStaticFiles();    // allows serving files from wwwroot

app.Run();