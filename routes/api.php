<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/usuarios', [UserController::class, 'get_all_user']);

Route::post('/usuarios/nuevo', [UserController::class, 'add_user']);

Route::get('/usuario/edit/{id}', [UserController::class, 'get_edit_user']);

Route::post('/usuario/edit/{id}', [UserController::class, 'post_edit_user']);

Route::get('/usuario/delete/{id}', [UserController::class, 'get_delete_user']);