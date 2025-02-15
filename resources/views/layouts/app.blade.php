<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('includes.meta')

    <title>@yield('title', 'Portfolio')</title>
    <link rel="icon" href="{{ asset('favicon.svg') }}" type="image/x-icon"/>

    <!-- Styles & Scripts -->
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @endif
</head>
<body>
<div id="app">
    @include('includes.header')
    <main id="main">
        @yield('content')
    </main>
    @include('includes.footer')
</div>
</body>
</html>
