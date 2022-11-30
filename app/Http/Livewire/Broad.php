<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Events\PublicEvent;

class Broad extends Component
{
    protected $listeners = ['echo:public,PublicEvent' => 'notifyEvent'];

    public function render()
    {
        return view('livewire.broad');
    }

    public function try(){
        session()->flash('message', 'try ['.now().']');
       // OrderShipped::dispatch();
        event(new PublicEvent('test'));
    }

    public function notifyEvent()  {
        session()->flash('message', 'notifyEvent ['.now().']');
        dd('fine');
        //$this->showNewOrderNotification = true;
    }
}