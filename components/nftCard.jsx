import { CopyToClipboard } from "react-copy-to-clipboard"

export const NFTCard = ({ nft }) => {

    return (
        <div className="w-1/4 flex flex-col ">
            <div className="rounded-md">
                <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-400 rounded-b-md h-110 ">
                <div className="">
                    <h2 className="text-xl text-gray-600">{nft.title}</h2>
                    <p className="text-gray-300 overflow-hidden">{nft.id.tokenId}</p>
                    <a onClick={() => {navigator.clipboard.writeText("http://localhost:3000/"); alert("Copied to clipboard.");}}
                    class="bg-slate-400 hover:bg-white text-gray-600 py-2 px-4 rounded inline-flex items-center overflow-hidden">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>{nft.contract.address}</a>
                </div>

            </div>

            <div className="flex-grow mt-2">
                <p className="text-gray-600">{nft.description}</p>
            </div>
        </div>
    )}