import Image from 'next/image';
import { FC } from 'react';
import { Specialty } from '../../core/domain/entities';
import { SpecialtyLayout } from '../../layouts';
import { data } from '../../util/data';
import { normalizeText } from '../../util/strings';

type Props = {
  specialty: Specialty;
};

const SpecialtiesPage: FC<Props> = ({ specialty }) => {
  return (
    <SpecialtyLayout title={specialty?.name}>
      <h1>{specialty?.name}</h1>
      <Image
        src={specialty?.image || '/assets/images/default.jpg'}
        alt={specialty?.name}
        width={500}
        height={300}
      />
      <p>{specialty?.description}</p>
    </SpecialtyLayout>
  );
};

export default SpecialtiesPage;

export async function getStaticPaths() {
  const specialties: Specialty[] = data;
  const paths = specialties.map((specialty) => ({
    params: { name: normalizeText(specialty.name) },
  }));

  return {
    // paths: [{ params: { name: false } }, ...paths],
    // paths: [{ params: { name: false } }, ...paths],
    paths: [...paths],
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  // console.log(params);

  let name: string = 'cardiology';

  if (!params?.name) {
    name = 'cardiology';
  } else {
    name = params.name;
  }

  const index = data.findIndex((item) => normalizeText(item.name) === name);
  // const specialty = data.find((item) => item.name === name);
  console.log(name, '=>', index);

  return {
    props: {
      specialty: index === -1 ? data[0] : data[index],
    },
  };
}
