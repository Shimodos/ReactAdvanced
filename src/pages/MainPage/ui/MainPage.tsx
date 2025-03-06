// import { BugButton } from 'app/providers/ErrorBoundery';
import { Counter } from '@/entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popup';
import { Page } from '@/shared/ui/Page/Page';
import { HStack, VStack } from '@/shared/ui/Stack';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {/* <BugButton /> */}
      {t('MainPage')}
      <Counter />
      <div>LisBox</div>
      <div>LisBox</div>
      <VStack gap="8">
        <ListBox
          defaultValue="Durward Reynolds"
          onChange={(value: string) => {}}
          value={undefined}
          items={[
            { value: 'Durward Reynolds', content: 'Durward Reynolds' },
            { value: 'Kenton Towne', content: 'Kenton Towne' },
            { value: 'Therese Wunsch', content: 'Therese Wunsch' },
            { value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true },
            { value: 'Katelyn Rohan', content: 'Katelyn Rohan' }
          ]}
        />
        <div>VLisBox</div>
      </VStack>
      <div>LisBox</div>
      <div>LisBox</div>
      <div>LisBox</div>
    </Page>
  );
};

export default MainPage;
