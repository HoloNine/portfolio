<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Meta Tags -->
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('favicon.svg') }}" type="image/x-icon">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    @vitereactrefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>
<body class="font-sans antialiased">
@inertia
</body>
</html>
