<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Banner;

class BannerSeeder extends Seeder {
    public function run() {
        Banner::create([
            'image_url' => 'banners/sample.jpg',
            'link' => 'https://google.com',
            'alt_text' => 'Check out this amazing offer!'
        ]);
    }
}
