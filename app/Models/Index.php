<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class index extends Model
{
    //
    public function insertMomo($data_momo)
    {
        return $this->db->insert('momo', $data_momo);
    }
}
