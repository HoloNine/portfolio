<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\View\View;

class HomeController extends Controller
{

    /**
     * Handles the invocation of the controller.
     *
     * @param Request $request The HTTP request instance.
     * @return View The rendered view for the home index.
     */
    public function __invoke(Request $request): View
    {
        return view('home.index');
    }
}
