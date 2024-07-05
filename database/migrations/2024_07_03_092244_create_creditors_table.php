<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('creditors', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50)->index();

            $table->unsignedSmallInteger('evaluation_c1')->default(0);
            $table->unsignedSmallInteger('evaluation_c2')->default(0);
            $table->unsignedSmallInteger('evaluation_c3')->default(0);
            $table->unsignedSmallInteger('evaluation_c4')->default(0);

            $table->float('normalization_c1')->default(0);
            $table->float('normalization_c2')->default(0);
            $table->float('normalization_c3')->default(0);
            $table->float('normalization_c4')->default(0);

            $table->float('matrix_c1')->default(0);
            $table->float('matrix_c2')->default(0);
            $table->float('matrix_c3')->default(0);
            $table->float('matrix_c4')->default(0);

            $table->float('prefensi_vi')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('creditors');
    }
};
