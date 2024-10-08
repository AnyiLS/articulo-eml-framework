import React from 'react'

const Register: React.FC = () => {
	return (
		<>
			<div 
                className="bg-background-color overflow-x-hidden xl:pb-0 pb-[10%] md:h-[100vh] xl:flex xl:flex-col xl:items-center bg-[url(/images/register/particula.png)] bg-contain"
                style={{ mixBlendMode: 'multiply' }}
            >
				<div className="flex justify-between items-center w-full pt-[30px] px-[10%]">
					<img src="/images/register/eml-logo.png" alt="Logo EML" />
					<img
						src="/images/register/articulos-eml.png"
						alt="Articulos EML"
					/>
				</div>
				<div className="pr-[20%] xl:pr-[9%] xl:mt-0 mt-[60px] flex justify-end">
					<img
						src="/images/register/circulos.png"
						className="animate-[spin-fade_8s_linear_infinite] xl:w-[80px] 2xl:w-[150px]"
						alt="Particulas"
						width={83}
						height={70}
					/>
				</div>
				<div className="mt-[-10%] container-text-99 xl:mt-[-3%] xl:w-full xl:h-full xl:max-w-[80%] relative xl:items-start md:flex md:flex-col md:items-center md:mt-[calc(100vh_*_0.1)]">
					<img
						src="/images/register/curva.svg"
						className="animate-[slide_4s_infinite] xl:ml-[15%] xl:w-[47%] 2xl:w-[43%]"
						alt="Curva"
						width={558}
						height={485}
					/>
					<div className='2xl:top-[-8%] 2xl:w-[350px] 2xl:h-[350px] xl:mt-0 xl:ml-0 xl:absolute xl:top-[-8%] xl:right-[27%] xl:w-[250px] xl:h-[250px] md:w-[250px] md:h-[350px] md:mt-[-15%] md:ml-[-50%] w-[250px] h-[250px] ml-[-10%] mt-[-20%] bg-[linear-gradient(_#f4c542_0%,#f3b51d_10%,#e3a300_50%,#d18a00_100%_)] flex justify-center items-center animate-[rotate_5s_linear_infinite] rounded-[50%] before:content-[""] z-[1] before:absolute before:w-[200px] before:h-[200px] before:bg-[linear-gradient(#f8e585_10%,#f7c300_50%,#f5a500_100%)] before:blur-[20px] before:rounded-[50%]'></div>
					<div className="xl:absolute xl:right-[-47%] 2xl:right-[-35%] xl:top-[1%] xl:mt-0 xl:ml-0 flex justify-center mt-[-30%] z-[1] relative animate-[slideUpDown_6s_infinite]">
						<img
							src="/images/register/senor.png"
							alt="Doctor EML"
                            className='w-[500px] max-w-[fit-content] xl:w-[40%]'
						/>
					</div>
					<div className="absolute xl:left-[-18%] xl:top-[2%] 2xl:top-0 top-0 left-0 flex justify-center items-center w-full z-[1]">
						<div className="relative xl:max-w-[355px] 2xl:max-w-[530px] 2xl:max-h-[550px] 2xl:h-full xl:max-h-[408px] md:max-w-[370px] md:max-h-[437px] bg-[#9ebdc730] pb-[10%] w-[90%] shadow-[0_0_25px_#e9e4e582] rounded-[15%] border-2 border-solid border-[#ede3e647] pt-[30px] px-[20px] w-[90%]">
                            <span className='absolute w-[29.3%] h-[3px] bg-[linear-gradient(to_right,transparent,#fff)] animate-[animate1_2s_linear_infinite] left-0 top-0' style={{ animationDelay: '1s' }}></span>
                            <span className='absolute h-[180px] w-0.5 bg-[linear-gradient(to_bottom,#e6e2ea4f,#dee6de63)] animate-[animate2_2s_linear_infinite] right-0 top-[0%]' style={{ animationDelay: '2s' }}></span>
                            <span className='absolute xl:top-[540px] w-[30%] h-0.5 bg-[linear-gradient(to_left,#e6e2ea4f,#dee6de63)] animate-[animate3_2s_linear_infinite] left-0 top-[437px]' style={{ animationDelay: '3s' }}></span>
                            <span className='absolute h-[180px] w-0.5 bg-[linear-gradient(to_top,#e6e2ea4f,#dee6de63)] animate-[animate4_2s_linear_infinite] left-0 top-[10%]' style={{ animationDelay: '4s' }}></span>
							<div className="flex justify-center items-center mt-[10%] xl:mt-[10px] 2xl:mt-[10%]">
								<h1 className="font-montserrat text-white text-[20px] xl:text-[25px] font-semibold">
									Registrarse
								</h1>
							</div>
							<div className="rounded-[20px] xl:h-[40px] 2xl:h-[60px] px-[20px] h-[40px] w-full mt-[25px] bg-[#293D75] flex items-center">
								<img
									src="/images/register/icon-person.svg"
									alt=""
                                    className='xl:h-[29px] xl:w-[22px] w-[15px] h-[22px]'
								/>
								<input
									type="text"
									className="h-full w-full pl-[10px] bg-[transparent] text-white font-montserrat placeholder:text-white"
									placeholder="Nombre"
								/>
							</div>
							<div className="rounded-[20px] xl:h-[40px] px-[20px] h-[40px] 2xl:h-[60px] w-full mt-[10px] bg-[#293D75] flex items-center">
								<img
									src="/images/register/icon-email.svg"
									alt=""
                                    className='xl:h-[29px] xl:w-[28px] w-[15px] h-[22px]'
								/>
								<input
									type="email"
									className="h-full w-full pl-[10px] bg-[transparent] text-white font-montserrat placeholder:text-white"
									placeholder="Email"
								/>
							</div>
							<div className="rounded-[20px] px-[20px] xl:h-[40px] h-[40px] 2xl:h-[60px] w-full mt-[10px] bg-[#293D75] flex items-center">
								<img
									src="/images/register/icon-document.svg"
									alt=""
                                    className='xl:h-[22px] xl:w-[29px] w-[15px] h-[22px]'
								/>
								<input
									type="number"
									className="h-full w-full pl-[10px] bg-[transparent] text-white font-montserrat placeholder:text-white"
									placeholder="Documento"
								/>
							</div>
                            <div className='flex items-center mt-[20px] gap-[10px]'>
                                <div className='w-[15px] h-[15px] bg-black rounded-[5px]'></div>
                                <label className='text-white font-montserrat text-[12px] font-medium'>Habeas data</label>
                            </div>
                            <div className='flex justify-center items-center mt-[20px]'>
                                <button className='bg-[#faa22f] h-[50px] w-[60%] text-white rounded-[10px] font-montserrat text-base'>Registrarse</button>
                            </div>
                            <div className='flex justify-center items-center mt-[10px]'>
                                <span className='text-[#293D75] text-[14px] font-montserrat font-semibold xl:text-white xl:text-base 2xl:text-[20px]'>Iniciar sesión</span>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Register
