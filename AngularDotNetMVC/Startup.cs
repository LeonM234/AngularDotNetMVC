using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularDotNetMVC.Startup))]
namespace AngularDotNetMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
