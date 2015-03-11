using System.Web.Optimization;

namespace AngularDotNetMVC
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/AngularDotNetMVC")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .Include("~/Scripts/AngularDotNetMVC.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}