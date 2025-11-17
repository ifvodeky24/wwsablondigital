"use client";

import dynamic from "next/dynamic";

// Hanya render OfflineStores di client
export default dynamic(() => import("./OfflineStores"), { ssr: false });
