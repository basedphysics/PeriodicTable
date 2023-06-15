import { useState } from 'react'
import { ControlPanel } from './ControlPanel';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function App() {

  const [selectedElement, setSelectedElement] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const elements = [
    "H", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "He", "Li", "Be", "", "", "", "", "", "", "", "", "", "", "B",  "C",  "N",  "O",  "F",  "Ne", "Na", "Mg", "", "", "", "", "", "", "", "", "", "", "Al", "Si", "P",  "S",  "Cl", "Ar",
    "K",  "Ca", "Sc", "Ti", "V",  "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
    "Rb", "Sr", "Y",  "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I",  "Xe",
    "Cs", "Ba", "", "Hf",
    "Ta", "W",  "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra",]/*  "Rf", "Db", "Sg", "Bh", "Hs",
    "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
  ];*/

  const periodFour = ["Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu",  "Th",
    "Pa", "U",  "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"
]

const alkaliMetals = [
  'Li', 'Na', 'K', 'Rb', 'Cs', 'Fr'
];

const alkalineEarthMetals = [
  'Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra'
];



const transitionMetals = [
  'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn',
  'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd',
  'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg',
  'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn',
  'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'
];


  const reactiveNonMetals = [
    "C", "N", "O", "F", "P", "S", "Cl", "Se", "Br", "I"
  ]
  const nobleGases = ["He", "Ne", "Ar", "Kr", "Xe", "Rn"]

  return (
    <div className="h-screen flex justify-center items-center">
        {menuOpen ? <div>
          <div className="fixed left-0 w-52 h-screen bg-slate-200"></div>
          <button onClick={() => setMenuOpen(false)}>
          <XMarkIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>
          </div> :
          <button onClick={() => setMenuOpen(true)}>
          <div className="fixed left-4 top-4">
          <Bars3Icon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </button>}
        <div className="flex flex-col gap-20 items-center">

        <div className="text-4xl">{selectedElement}</div>
      <div className="grid grid-cols-18 gap-3">
      {elements.map((element: string) => {
        let backgroundColor = '';
                if (element === 'H') {
                backgroundColor = 'bg-blue-400';
              }
        else if (nobleGases.includes(element)) {
          backgroundColor = 'bg-cyan-400';
        }
        else if (alkaliMetals.includes(element)) {
        backgroundColor = 'bg-orange-400';

        }
        else if (alkalineEarthMetals.includes(element)) {
          backgroundColor = 'bg-amber-400'

        }
        else if (reactiveNonMetals.includes(element)) {
          backgroundColor = 'bg-blue-200'

        }
      else if (transitionMetals.includes(element)) {
          backgroundColor = 'bg-yellow-200'

      }
      if (element === '') {
        return <div></div>
      }
      if (backgroundColor === '') {
        return (<div className='w-12 h-12 flex justify-center items-center bg-red-400'>{element}</div>)
      }
      return (<button onClick={() => setSelectedElement(element)}>
        <div className={`w-12 h-12 flex justify-center items-center hover:scale-110 ${backgroundColor}`}>{element}</div>
        </button>)
    })}
      </div>
      <ControlPanel />
      </div>
    </div>
  )
}

export default App
