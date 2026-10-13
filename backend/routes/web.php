<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->file(public_path('index.html'));
});

Route::fallback(function () {
    if (request()->is('api/*')) {
        abort(404);
    }

    return response()->file(public_path('index.html'));
});