import { useState } from 'react';
import { earnings } from '../../data/dashboardData';
import { policySearchResults, redeemCatalog } from '../../data/flowMockData';
import { useNavigation } from '../useNavigation';
import {
  FlowBtnStack,
  FlowChips,
  FlowField,
  FlowGroup,
  FlowInput,
  FlowLead,
  FlowListCard,
  FlowPrimaryButton,
  FlowRow,
  FlowSecondaryButton,
  FlowStepIndicator,
  FlowTextarea,
} from '../flowUi/FlowUi';

const products = [
  { id: 'phone', label: 'Phone' },
  { id: 'battery', label: 'EV battery' },
] as const;

export function EncashFlow() {
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState('25000');
  const [method, setMethod] = useState('bank');

  if (step === 0) {
    return (
      <>
        <FlowLead>Available to encash this cycle (after holds): {earnings.amountFormatted}</FlowLead>
        <FlowField label="Amount (₹)">
          <FlowInput inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </FlowField>
        <FlowBtnStack>
          <FlowPrimaryButton onClick={() => setStep(1)} disabled={!amount}>
            Continue
          </FlowPrimaryButton>
        </FlowBtnStack>
      </>
    );
  }

  if (step === 1) {
    return (
      <>
        <FlowStepIndicator step={1} total={3} />
        <FlowLead>Payout method</FlowLead>
        <FlowGroup>
          <FlowRow
            title="Bank account · HDFC ****4421"
            subtitle="Primary · Same day NEFT"
            onClick={() => setMethod('bank')}
            showChevron={false}
          />
          <FlowRow title="UPI · adithya@okbank" onClick={() => setMethod('upi')} showChevron={false} />
        </FlowGroup>
        <FlowBtnStack>
          <FlowPrimaryButton onClick={() => setStep(2)}>Review</FlowPrimaryButton>
          <FlowSecondaryButton onClick={() => setStep(0)}>Back</FlowSecondaryButton>
        </FlowBtnStack>
      </>
    );
  }

  return (
    <>
      <FlowStepIndicator step={2} total={3} />
      <FlowLead>
        You’re encashing <strong>₹{amount}</strong> to {method === 'bank' ? 'HDFC ****4421' : 'UPI'}.
        Processing typically completes within 1 business day.
      </FlowLead>
      <FlowBtnStack>
        <FlowPrimaryButton onClick={() => setStep(0)}>Confirm encashment</FlowPrimaryButton>
        <FlowSecondaryButton onClick={() => setStep(1)}>Edit</FlowSecondaryButton>
      </FlowBtnStack>
    </>
  );
}

export function RedeemFlow() {
  const [pick, setPick] = useState<string | null>(null);
  const selected = redeemCatalog.find((r) => r.id === pick);

  return (
    <>
      <FlowLead>Spend reward points earned from tier benefits. Eligibility updates with your tier.</FlowLead>
      {redeemCatalog.map((r) => (
        <FlowListCard
          key={r.id}
          title={r.title}
          meta={`${r.cost} · ${r.tier}`}
          badge={pick === r.id ? 'Selected' : undefined}
          extra={
            <button
              type="button"
              style={{
                marginTop: 12,
                padding: '8px 16px',
                borderRadius: 8,
                border: '1px solid var(--border-strong)',
                background: 'var(--surface-card)',
                fontWeight: 600,
                cursor: 'pointer',
              }}
              onClick={() => setPick(r.id)}
            >
              {pick === r.id ? 'Selected' : 'Select'}
            </button>
          }
        />
      ))}
      <FlowBtnStack>
        <FlowPrimaryButton disabled={!selected} onClick={() => {}}>
          Redeem {selected ? `· ${selected.title}` : ''}
        </FlowPrimaryButton>
      </FlowBtnStack>
    </>
  );
}

export function IssuePolicyFlow() {
  const [step, setStep] = useState(0);
  const [product, setProduct] = useState('phone');
  const [phone, setPhone] = useState('');

  if (step === 0) {
    return (
      <>
        <FlowStepIndicator step={0} total={3} />
        <FlowLead>
          Choose phone insurance or EV battery cover to start a quote. Customer details can be pulled
          from CRM.
        </FlowLead>
        <FlowChips
          options={products.map((p) => ({ id: p.id, label: p.label }))}
          value={product}
          onChange={setProduct}
        />
        <FlowBtnStack>
          <FlowPrimaryButton onClick={() => setStep(1)}>Continue</FlowPrimaryButton>
        </FlowBtnStack>
      </>
    );
  }

  if (step === 1) {
    return (
      <>
        <FlowStepIndicator step={1} total={3} />
        <FlowField label="Customer mobile">
          <FlowInput
            inputMode="tel"
            placeholder="10-digit number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FlowField>
        <FlowField label="Notes (optional)">
          <FlowTextarea placeholder="e.g. Existing ACKO phone / battery customer" rows={3} />
        </FlowField>
        <FlowBtnStack>
          <FlowPrimaryButton onClick={() => setStep(2)} disabled={phone.length < 10}>
            Run quote
          </FlowPrimaryButton>
          <FlowSecondaryButton onClick={() => setStep(0)}>Back</FlowSecondaryButton>
        </FlowBtnStack>
      </>
    );
  }

  return (
    <>
      <FlowStepIndicator step={2} total={3} />
      <FlowLead>
        Indicative premium for {products.find((p) => p.id === product)?.label}:{' '}
        <strong>{product === 'battery' ? '₹18,400' : '₹2,840'} / yr</strong>
        {product === 'phone'
          ? ' (IMEI verified, screen + theft bundle).'
          : ' (pack health, warranty alignment, optional charger rider).'}{' '}
        Customer can adjust add-ons on the next screen.
      </FlowLead>
      <FlowBtnStack>
        <FlowPrimaryButton onClick={() => setStep(0)}>Share proposal link</FlowPrimaryButton>
        <FlowSecondaryButton onClick={() => setStep(1)}>Edit details</FlowSecondaryButton>
      </FlowBtnStack>
    </>
  );
}

const endorsementTypes = [
  { id: 'device', label: 'Device / IMEI update' },
  { id: 'battery', label: 'Battery serial / pack' },
  { id: 'nominee', label: 'Nominee' },
  { id: 'contact', label: 'Contact' },
  { id: 'other', label: 'Other' },
] as const;

export function EndorsementInitFlow() {
  const { close } = useNavigation();
  const [step, setStep] = useState(0);
  const [query, setQuery] = useState('');
  const [policyId, setPolicyId] = useState<string | null>(null);
  const [endoType, setEndoType] = useState('device');

  if (step === 0) {
    return (
      <>
        <FlowStepIndicator step={0} total={3} />
        <FlowField label="Search policy">
          <FlowInput
            placeholder="Policy number or customer name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </FlowField>
        <FlowLead>Recent policies</FlowLead>
        {policySearchResults.map((p) => (
          <FlowListCard
            key={p.id}
            title={p.policyId}
            meta={`${p.product} · ${p.holder}`}
            extra={
              <button
                type="button"
                style={{
                  marginTop: 8,
                  padding: '6px 12px',
                  borderRadius: 8,
                  border: 'none',
                  background: 'var(--purple-600)',
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setPolicyId(p.policyId);
                  setStep(1);
                }}
              >
                Select
              </button>
            }
          />
        ))}
      </>
    );
  }

  if (step === 1) {
    return (
      <>
        <FlowStepIndicator step={1} total={3} />
        <FlowLead>Policy {policyId}</FlowLead>
        <FlowChips
          options={endorsementTypes.map((e) => ({ id: e.id, label: e.label }))}
          value={endoType}
          onChange={setEndoType}
        />
        <FlowField label="Describe the change">
          <FlowTextarea placeholder="What needs updating?" rows={4} />
        </FlowField>
        <FlowBtnStack>
          <FlowPrimaryButton onClick={() => setStep(2)}>Continue</FlowPrimaryButton>
          <FlowSecondaryButton onClick={() => setStep(0)}>Back</FlowSecondaryButton>
        </FlowBtnStack>
      </>
    );
  }

  return (
    <>
      <FlowStepIndicator step={2} total={3} />
      <FlowLead>
        Request submitted for {policyId}. Reference ENDO-{policyId?.slice(-5)}. Track under
        endorsements.
      </FlowLead>
      <FlowBtnStack>
        <FlowPrimaryButton onClick={() => close()}>Done</FlowPrimaryButton>
        <FlowSecondaryButton onClick={() => setStep(0)}>Start another</FlowSecondaryButton>
      </FlowBtnStack>
    </>
  );
}
