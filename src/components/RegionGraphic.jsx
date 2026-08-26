import { regions } from "../data/site";

export default function RegionGraphic() {
  return (
    <div className="region-graphic">
      <div className="region-map" role="img" aria-label="Regional practice network connecting Gaborone, Pretoria, Nairobi and Kigali">
        <svg viewBox="0 0 720 620" aria-hidden="true">
          <g transform="translate(58 15) scale(1.2)">
            <path
              className="region-outline"
              d="M174 28 186 27 194 26 201 28 208 24 216 24 224 27 230 25 226 35 229 43 240 48 247 54 259 58 270 64 280 68 285 66 285 58 291 53 301 53 308 57 319 58 328 62 338 65 345 65 349 61 356 61 360 64 364 61 371 63 369 71 374 81 371 89 378 98 382 109 389 119 390 132 397 141 398 153 408 160 414 168 424 175 432 183 439 180 448 184 459 182 472 178 471 190 465 202 455 212 449 220 438 228 429 239 419 246 411 256 405 269 402 283 406 295 410 307 409 320 404 329 392 337 379 345 377 360 379 372 374 381 365 387 359 400 349 409 342 422 330 435 319 439 306 440 296 440 286 441 278 438 275 428 269 420 265 409 258 401 254 392 251 383 244 375 239 368 235 358 232 348 235 338 233 329 237 318 243 307 244 296 239 284 232 274 229 264 222 254 218 242 220 232 216 222 207 220 200 216 192 216 187 210 175 209 163 212 151 214 137 214 122 215 111 211 101 204 92 199 83 191 77 182 68 177 60 169 59 160 63 153 61 146 66 136 74 128 80 117 87 109 93 99 101 92 101 82 108 74 111 64 120 58 124 48 132 40 141 44 151 43 159 37Z"
            />
            <path
              className="region-outline region-outline--island"
              d="M458 309 464 311 466 318 470 324 468 333 469 341 464 351 462 361 456 371 452 379 444 384 435 383 429 377 427 369 431 359 438 353 441 343 446 335 446 326 452 318 454 311Z"
            />
          </g>
          <path className="region-route" d="M443 469 458 482M443 469C458 415 464 360 472 315M472 315 521 311" />
          <circle className="region-node home" cx="443" cy="469" r="8" />
          <circle className="region-node" cx="458" cy="482" r="6" />
          <circle className="region-node" cx="472" cy="315" r="6" />
          <circle className="region-node" cx="521" cy="311" r="6" />
          <text x="455" y="457">GABORONE / BW</text>
          <text x="470" y="501">PRETORIA / ZA</text>
          <text x="458" y="298" textAnchor="end">KIGALI / RW</text>
          <text x="535" y="296">NAIROBI / KE</text>
        </svg>
      </div>
      <div className="region-list">
        {regions.map((region, index) => (
          <div className="region-row" key={region.code}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{region.country}</strong>
            <span>{region.city}</span>
            <em>{region.note}</em>
          </div>
        ))}
      </div>
    </div>
  );
}
