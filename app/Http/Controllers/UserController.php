<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Mail\NewUserMail;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    
    public function index()
    {
        return view('usuarios.index');
    }

    public function get_all_user()
    {
        $usuarios = User::all();
        return response()->json([
            'usuarios' => $usuarios
        ], 200);
    }

    public function add_user(Request $request)
    {
        $usuario = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'telefono' => $request->telefono,
            'password' => Hash::make($request->password)
        ]);

        

        if(is_null($usuario)){
            return response()->json(["message"=>"Hubo un problema al registrar el usuario"]
            ,404);
        }
        Mail::to('s.molano0818@gmail.com')->send(new NewUserMail());
        return response()->json([
            'usuario' => $usuario
        ], 200);
    }

    public function get_edit_user($id) {
        $usuario = User::find($id);
        if(is_null($usuario)){
            return response()->json(["message"=>"Hubo un problema al buscar el usuario"]
            ,404);
        }
        return response()->json([
            'usuario' => $usuario
        ], 200);
    }

    public function post_edit_user(Request $request, $id)
    {
        $usuario = User::find($id);
        if(is_null($usuario)){
            return response()->json(["message"=>"Hubo un problema al actualizar el usuario"]
            ,404);
        }
        $usuario->update([
            'name' => $request->name,
            'email' => $request->email,
            'telefono' => $request->telefono,
            'password' => Hash::make($request->password)
        ]);
        return response()->json([
            'usuario' => $usuario
        ], 200);
    }

    public function get_delete_user($id) 
    {
        $usuario = User::findOrFail($id);
        if(is_null($usuario)){
            return response()->json(["message"=>"Hubo un problema al buscar el usuario"]
            ,404);
        }
        $usuario->delete();
        return response()->json(["message"=>"Se ha eliminado el usuario"], 200);
    }
}
