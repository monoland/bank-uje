<?php

namespace Database\Seeders;

use App\Models\Creteria;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'administrator',
            'email' => 'admin@bank-uje.test',
            'password' => Hash::make('P@ssw0rd')
        ]);

        Creteria::create(
            [ 'name' => 'Jaminan Nasabah', 'slug' => 'C1', 'worth' => 0.40, 'type' => 'B']
        );

        Creteria::create(
            [ 'name' => 'Kondisi Ekonomi', 'slug' => 'C2', 'worth' => 0.30, 'type' => 'B']
        );

        Creteria::create(
            [ 'name' => 'Karakter Nasabah', 'slug' => 'C3', 'worth' => 0.20, 'type' => 'C']
        );

        Creteria::create(
            [ 'name' => 'Kelayakan Usaha', 'slug' => 'C4', 'worth' => 0.10, 'type' => 'C']
        );
    }
}
