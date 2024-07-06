<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CreditorController;
use App\Http\Controllers\CreteriaController;

Route::get('/user', function (Request $request) {
    return response()->json([
        'username' => $request->user()->name,
        'usermail' => $request->user()->email,
    ], 200);
})->middleware('auth:sanctum');

Route::get('creditor/ranking', [CreditorController::class, 'ranking'])->middleware('auth:sanctum');
Route::get('creditor/calculate', [CreditorController::class, 'calculate'])->middleware('auth:sanctum');
Route::resource('creditor', CreditorController::class)->middleware('auth:sanctum');
Route::resource('creteria', CreteriaController::class)->middleware('auth:sanctum');

