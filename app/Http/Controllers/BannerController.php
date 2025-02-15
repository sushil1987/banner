<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller {
    public function getBanner() {
        $banner = Banner::inRandomOrder()->first();

        if (!$banner) {
            return response()->json(['error' => 'No banners found'], 404);
        }

        return response()->json([
            'image_url' => asset('storage/' . $banner->image_url),
            'link' => $banner->link,
            'alt_text' => $banner->alt_text
        ]);
    }
}
