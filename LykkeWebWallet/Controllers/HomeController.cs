using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using LykkeWebWallet.Models;
using System.Net;

namespace LykkeWebWallet.Controllers
{

  public class HomeController : Controller
  {
    /*
     TODO :make that in a structure 
      must be array of values
      keys [] = local, dev, prod
      each to be array - apiUrl, client_id, client_secret, return_url
     */
    private String apiUrl = "https://auth-dev.lykkex.net/connect/token";

    public IActionResult About()
    {
      ViewData["Message"] = "Your application description page.";

      return View();
    }

    public IActionResult Contact()
    {
      ViewData["Message"] = "Your contact page.";

      return View();
    }

    [HttpGet]
    public async Task<IActionResult> Authentication(String code, String client_id, String redirect_uri)
    {
      client_id = client_id.Trim();
      String[] errors = new String[3];
      bool hasErrors = false;

      if (client_id == "")
      {
        errors[errors.Length] = "Missing client_id";
        hasErrors = true;
      }

      if (code == "")
      {
        errors[errors.Length] = "Missing code";
        hasErrors = true;
      }

      if (redirect_uri == "")
      {
        errors[errors.Length] = "Missing redirect_uri";
        hasErrors = true;
      }

      if (hasErrors)
      {
        return Json(errors);
      }
      else
      {

        /*
        TODO :Use the new structure that you need to implement on line 17 here instead of these ifs 
        */

        String client_secret = "";
        // PORT 4200
        if (client_id == "84df0c4e-ffbb-4962-9754-7970b4f800ac" && redirect_uri == "http://localhost:4200/")
        {
          client_secret = "594b6d10-3338-4812-ac88-1bd2d375f29a";
        }
        // local dev environment
        if (client_id == "36dda2e6-f187-4691-8ba6-97673e0086fe" && redirect_uri == "http://localhost:3000/")
        {
          client_secret = "7c3e0a93-767c-4bda-971e-7e0f2fd66ecc";
        }
        // dev staging environment
        if (client_id == "4849c8f1-e9c7-4de5-851b-af1ba4bf8ef6" && redirect_uri == "https://wallet-dev.lykkex.net")
        {
          client_secret = "c394860b-d484-4049-8f49-3b3c1bf05a4c";

        }

        String postData = "code=" + code;
        postData += "&client_id=" + client_id;
        postData += "&client_secret=" + client_secret;
        postData += "&grant_type=" + "authorization_code";
        postData += "&redirect_uri=" + redirect_uri;

        using (var client = new HttpClient())
        {
          var response = await client.PostAsync
          (this.apiUrl,
          new StringContent(postData, Encoding.UTF8, "application/x-www-form-urlencoded")
          );

          var body = await response.Content.ReadAsStringAsync();
          return Ok(body);
        }
      }
    }

    public IActionResult Error()
    {
      return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
  }
}
