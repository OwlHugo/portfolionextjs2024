'use client'
import { getShadowColorLevel } from "../../utils/helpers/getShadowColorLevel";

export function BadgePlate({
    plateText,
    textClassName = 'text-white',
    level,
  }) {
    // Obtenha a cor dentro do componente
    const levelColor = getShadowColorLevel(level);

    return (
      <div className={`flex py-2 pr-2 rounded-md ${levelColor} -ml-2`}>
        <h2 className={`text-center ml-[16px] ${textClassName}`}>{plateText}</h2>
      </div>
    );
}
