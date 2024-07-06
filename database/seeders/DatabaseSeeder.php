<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Creditor;
use App\Models\Creteria;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory()->create([
        //     'name' => 'administrator',
        //     'email' => 'admin@bank-uje.test',
        //     'password' => Hash::make('P@ssw0rd')
        // ]);

        // Creteria::create(
        //     [ 'name' => 'Jaminan Nasabah', 'slug' => 'C1', 'worth' => 0.40, 'type' => 'B']
        // );

        // Creteria::create(
        //     [ 'name' => 'Kondisi Ekonomi', 'slug' => 'C2', 'worth' => 0.30, 'type' => 'B']
        // );

        // Creteria::create(
        //     [ 'name' => 'Karakter Nasabah', 'slug' => 'C3', 'worth' => 0.20, 'type' => 'C']
        // );

        // Creteria::create(
        //     [ 'name' => 'Kelayakan Usaha', 'slug' => 'C4', 'worth' => 0.10, 'type' => 'C']
        // );


        foreach (Creditor::all() as $creditor) {

            // C!
            $C1 = Creteria::firstWhere('slug', 'C1');
            $creditor->normalization_c1 = round($creditor->evaluation_c1 / Creditor::max('evaluation_c1'), 4);
            $creditor->matrix_c1 = round($C1->worth * $creditor->normalization_c1, 4);

            $C2 = Creteria::firstWhere('slug', 'C2');
            $creditor->normalization_c2 = round($creditor->evaluation_c2 / Creditor::max('evaluation_c2'), 4);
            $creditor->matrix_c2 = round($C2->worth * $creditor->normalization_c2, 4);

            $C3 = Creteria::firstWhere('slug', 'C3');
            $creditor->normalization_c3 = round(Creditor::min('evaluation_c3') / $creditor->evaluation_c3, 4);
            $creditor->matrix_c3 = round($C3->worth * $creditor->normalization_c3, 4);

            $C4 = Creteria::firstWhere('slug', 'C4');
            $creditor->normalization_c4 = round(Creditor::min('evaluation_c4') / $creditor->evaluation_c4, 4);
            $creditor->matrix_c4 = round($C4->worth * $creditor->normalization_c4, 4);
            

            $creditor->prefensi_vi = $creditor->matrix_c1 + $creditor->matrix_c2 + $creditor->matrix_c3 + $creditor->matrix_c4;

            $creditor->save();
        }
    }
}
