<?php

namespace App\Http\Controllers;

use App\Models\Creditor;
use App\Models\Creteria;
use Illuminate\Http\Request;

class CreditorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Creditor::paginate(15);
    }

    public function ranking()
    {
        return Creditor::orderBy('prefensi_vi', 'desc')->paginate(15);
    }

    /**
     * calculate function
     *
     * @return void
     */
    public function calculate()
    {
        foreach (Creditor::all() as $creditor) {
            // C!
            $C1 = Creteria::find('C1');
            $creditor->normalization_c1 = $creditor->evaluation_c1 / Creditor::max('evaluation_c1');
            $creditor->matrix_c1 = $C1->worth * $creditor->normalization_c1;
            
            $C2 = Creteria::find('C2');
            $creditor->normalization_c2 = $creditor->evaluation_c2 / Creditor::max('evaluation_c2');
            $creditor->matrix_c2 = $C2->worth * $creditor->normalization_c2;

            $C3 = Creteria::find('C3');
            $creditor->normalization_c3 = Creditor::min('evaluation_c3') / $creditor->evaluation_c3;
            $creditor->matrix_c3 = $C3->worth * $creditor->normalization_c3;

            $C4 = Creteria::find('C4');
            $creditor->normalization_c4 = Creditor::min('evaluation_c4') / $creditor->evaluation_c4;
            $creditor->matrix_c4 = $C4->worth * $creditor->normalization_c4;
            
            $creditor->save();
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $model = new Creditor();
            $model->name = $request->name;
            $model->evaluation_c1 = $request->evaluation_c1;
            $model->evaluation_c2 = $request->evaluation_c2;
            $model->evaluation_c3 = $request->evaluation_c3;
            $model->evaluation_c4 = $request->evaluation_c4;
            $model->save();

            return $model;
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], $e->getCode());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Creditor $creditor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Creditor $creditor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Creditor $creditor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Creditor $creditor)
    {
        //
    }
}
