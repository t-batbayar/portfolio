import React from 'react';

import classes from './Info.css';

const Info = () => {
	return (
		<div className={ classes.Info }>
			<div className={ classes.Info__text }>
				Намайг Тутаагийн Батбаяр гэдэг. Би хэрэглэхэд хялбар, өнгө үзэмж, үйл ажиллагаа сайн вэбсайтын фронт энд (front end) хөгжүүлэлт хийхэд мэргэшсэн. Шинэ зүйлийг сурах, тулгарсан асуудалд шийдэл олох дур сонирхолтой.
			</div>
			<div className={ classes.Info__advantage }>
				<div className={ classes.Info__advantage__item }>
					<p className={ classes.Info__advantage__item__key }>Давуу тал:</p>
					<p className={ classes.Info__advantage__item__value }>Орчиндоо хурдан дасдаг, тэвчээртэй, аливаа юмыг хурдан сурдаг, шинийг сурах эрмэлзэлтэй, бусдыг сонсож үйл ажиллагаандаа тусгах чадвартай.</p>
				</div>
			</div>
		</div>
	)
}

export default Info;