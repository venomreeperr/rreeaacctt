import './App.css'

export default function Card3() {
  return (
    <div className="group w-64 flex flex-col rounded-2xl bg-gray-900 overflow-hidden hover:bg-gray-800 transition-all duration-300 cursor-pointer border border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-purple-500/10">
      <div className="relative overflow-hidden">
        <img
          src="/img/bored_ape_nft_accidental_.jpg"
          alt="Bored ape nft accidental"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
          <span className="text-xs font-mono text-white">#345</span>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-white font-semibold text-lg mb-4 line-clamp-1">Bored ape nft accidental</h2>
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Current Price</span>
          <div className="flex items-center gap-1.5">
            <span className="text-white font-bold text-lg">0.01</span>
            <span className="text-gray-400 text-sm font-medium">ETH</span>
          </div>
        </div>
      </div>
    </div>
  )
}
